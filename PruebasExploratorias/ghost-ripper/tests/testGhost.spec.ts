import { test, expect,defineConfig } from '@playwright/test';
export default defineConfig({
    use: {
      video: 'on-first-retry',
    },
  });
test('test', async ({ page }) => {
  await page.goto('http://localhost:2368/ghost/');
  await page.goto('http://localhost:2368/ghost/#/signin');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('e.restrepoe');

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('e.restrepoe@uniandes.edu.co');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('PassGH_123');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  
});

