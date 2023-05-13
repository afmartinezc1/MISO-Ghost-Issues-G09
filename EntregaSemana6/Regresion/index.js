const fs = require("fs");
const path = require("path");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");

const { options } = config;

function getDirectories(rootDir) {
  const folders = [];
  // Read the contents of the directory
  const filesAndDirs = fs.readdirSync(rootDir, { withFileTypes: true });

  // Filter out the directories
  const dirs = filesAndDirs.filter((dirent) => dirent.isDirectory());

  // Push the directory names
  for (const dir of dirs) {
    folders.push(path.join(rootDir, dir.name));
  }
  return folders;
}

function getFiles(rootDir) {
  const filesInDir = [];
  // Read the contents of the directory
  const filesAndDirs = fs.readdirSync(rootDir, { withFileTypes: true });

  // Filter out the files
  const files = filesAndDirs.filter((dirent) => dirent.isFile());

  // Push the file names
  for (const file of files) {
    if (file.name !== "index.txt")
      filesInDir.push(path.join(rootDir, file.name));
  }
  return filesInDir;
}

async function executeTest(datetime) {
  let resultInfo = {};
  const folders = getDirectories("../Ghost4.44.0/Kraken/customReports");
  await folders.forEach(async (folder) => {
    const feature = folder.split("/").slice(-1)[0];

    if (!fs.existsSync(`./results/${datetime}/${feature}`)) {
      fs.mkdirSync(`./results/${datetime}/${feature}`, { recursive: true });
    }

    fs.copyFileSync(
      "./index.css",
      `./results/${datetime}/${feature}/index.css`
    );

    resultInfo[feature] = {};
    const filesGhost4 = getFiles(folder);
    await filesGhost4.forEach(async (fileGhost4) => {
      const fileGhost3 = fileGhost4.replace("4.44.0", "3.41.1");

      const step = fileGhost4.split("/").slice(-1)[0].replace(".png", "");

      fs.copyFileSync(
        fileGhost3,
        `./results/${datetime}/${feature}/before-${step}.png`
      );
      fs.copyFileSync(
        fileGhost4,
        `./results/${datetime}/${feature}/after-${step}.png`
      );
      const data = await compareImages(
        fs.readFileSync(fileGhost3),
        fs.readFileSync(fileGhost4),
        options
      );
      resultInfo[feature][step] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };
      fs.writeFileSync(
        `./results/${datetime}/${feature}/compare-${step}.png`,
        data.getBuffer()
      );
    });
    // Create html
    // fs.writeFileSync(
    //   `./results/${datetime}/${feature}/report.html`,
    //   createReport(datetime, resultInfo[feature], feature)
    // );
  });
  return resultInfo;
}

(async () => {
  let datetime = new Date().toISOString().replace(/:/g, ".");
  const resultInfo = await executeTest(datetime);
  Object.entries(resultInfo).forEach(([feature, data]) => {
    fs.writeFileSync(
      `./results/${datetime}/${feature}/report.html`,
      createReport(datetime, data, feature)
    );
  });
})();

function steps(step, info) {
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h2>Step: ${step}</h2>
      <p>Data: ${JSON.stringify(info)}</p>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="before-${step}.png" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="after-${step}.png" id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="./compare-${step}.png" id="diffImage" label="Diff">
    </div>
  </div>
</div>`;
}

function createReport(datetime, resInfo, feature) {
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Report for ${feature}
          </h1>
          <p>Executed: ${datetime}</p>
          <div id="visualizer">
          ${Object.entries(resInfo)
            .sort(([step_name1], [step_name2]) => {
              const number1 = parseInt(step_name1.split("_")[0]);
              const number2 = parseInt(step_name2.split("_")[0]);
              return number1 - number2;
            })
            .map(([step_name, info]) => steps(step_name, info))}
          </div>
      </body>
  </html>`;
}
