import { test, expect } from '@playwright/test';

test.describe('RealmForge End-to-End Full Gameplay Flow', () => {
  const testUsername = `E2EWarrior_${Date.now().toString().substring(6)}`;
  const testEmail = `${testUsername.toLowerCase()}@realmforge.gg`;
  const testPassword = 'Password123!';

  test('Signup -> Lobby -> Match Gameplay -> Leaderboard Verification', async ({ page }) => {
    // 1. Visit Portal Home
    await page.goto('/');
    await expect(page).toHaveTitle(/RealmForge/);

    // 2. Signup new account
    const createAccountTab = page.getByRole('button', { name: 'Create Account' });
    if (await createAccountTab.isVisible()) {
      await createAccountTab.click();
    }

    await page.fill('input[placeholder="TacticalMaster"]', testUsername);
    await page.fill('input[placeholder="tactician@realmforge.gg"]', testEmail);
    await page.fill('input[placeholder="••••••••"]', testPassword);
    await page.click('button:has-text("Forge Account")');

    // 3. Confirm redirected to Main Portal / Lobby
    await expect(page.getByText(testUsername)).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/Battle Nexus & Matchmaking/i)).toBeVisible();

    // 4. Create Private Custom Room
    await page.click('button:has-text("Create Private Room")');
    await expect(page.getByText(/Squad Roster/i)).toBeVisible({ timeout: 5000 });

    // 5. Ready Up & Launch Match
    await page.click('button:has-text("Ready Up")');
    await expect(page.getByText(/Ready \(Click to Unready\)/i)).toBeVisible();

    await page.click('button:has-text("Launch Match")');

    // 6. Verify Match Arena View & HUD elements
    await expect(page.getByText(/CURRENT WAVE/i)).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(/Gold/i)).toBeVisible();
    await expect(page.getByText(/HP/i)).toBeVisible();

    // 7. Select Archer Tower from Hotbar
    await page.click('button:has-text("Archer")');

    // 8. Open Dispatch Chat and send message
    await page.fill('input[placeholder="Send team message..."]', 'Defending north lane!');
    await page.keyboard.press('Enter');
    await expect(page.getByText('Defending north lane!')).toBeVisible();

    // 9. Leave match and check Leaderboard navigation
    await page.click('button:has-text("Surrender / Leave")');
    await page.click('button:has-text("Leaderboard")');
    await expect(page.getByText(/Global Hall of Fame/i)).toBeVisible();
  });
});
