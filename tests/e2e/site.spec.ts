import { test, expect } from '@playwright/test';

test.describe('AirportMatrix X 4.0 E2E Verification Suite', () => {
  test('Home page should render brand header, hero, and visual intelligence center', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AirportMatrix/);

    // Hero title
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toContainText('机场代理趋势数据库');

    // Intent routing section
    await expect(page.locator('text=热门需求与场景入口')).toBeVisible();

    // Entity Database showcase
    await expect(page.locator('text=数据库精选实体与关系图谱')).toBeVisible();

    // Risk Dashboard
    await expect(page.locator('text=实时机场状态与风险监控雷达')).toBeVisible();

    // Glass cards present
    const glassCards = page.locator('.glass-card-hover');
    await expect(glassCards.first()).toBeVisible();
  });

  test('Provider matrix page should filter and display providers', async ({ page }) => {
    await page.goto('/providers');
    await expect(page.locator('h1')).toContainText('机场综合矩阵库');

    // Check compare table
    const table = page.locator('table');
    await expect(table).toBeVisible();
    await expect(page.locator('text=光速云 (GuangSuCloud)').first()).toBeVisible();
  });

  test('Provider detail page should render comprehensive score and specs', async ({ page }) => {
    await page.goto('/provider/guangsucloud');
    await expect(page.locator('h1')).toContainText('光速云 (GuangSuCloud)');
    await expect(page.locator('text=综合评分')).toBeVisible();
    await expect(page.locator('text=链路稳定性')).toBeVisible();
    await expect(page.locator('text=核心优势 (Pros)')).toBeVisible();
    // Coupon code box
    await expect(page.locator('text=AMM').first()).toBeVisible();
  });

  test('Client page should render installation and engine info', async ({ page }) => {
    await page.goto('/client/clash-verge');
    await expect(page.getByText('Mihomo (Clash.Meta)', { exact: true }).first()).toBeVisible();
  });

  test('Protocol page should render anti-blocking score and transport', async ({ page }) => {
    await page.goto('/protocol/vless');
    await expect(page.locator('h1')).toContainText('VLESS + Reality');
    await expect(page.locator('text=抗封锁能力')).toBeVisible();
  });

  test('Article detail page should render QuickAnswer and FAQ schema', async ({ page }) => {
    await page.goto('/articles/guangsucloud-in-depth-review-2026');
    await expect(page.locator('h1')).toContainText('光速云 (GuangSuCloud) 2026 深度实测报告');

    // Quick answer box
    await expect(page.locator('text=Quick Answer · 核心快速结论')).toBeVisible();

    // TOC
    await expect(page.locator('text=文章目录导航')).toBeVisible();

    // FAQ
    await expect(page.locator('text=高频核心疑问解答 (FAQ)')).toBeVisible();
  });

  test('Search page should dynamically filter results on query input', async ({ page }) => {
    await page.goto('/search?q=光速云');
    await expect(page.locator('#results-count')).toBeVisible();
    await expect(page.locator('#search-results')).toContainText('光速云');
  });

  test('404 page should render when visiting non-existent route', async ({ page }) => {
    await page.goto('/non-existent-page-url-404');
    await expect(page.locator('h1')).toContainText('404 - 页面未找到');
  });
});
