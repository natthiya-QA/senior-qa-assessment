# Senior QA Automation Assessment - E-commerce App

## Automation Strategy (Section A1)
For this assessment, I chose a **Hybrid Strategy** focusing on **Signal over Coverage**:
* **UI Testing (Playwright)**: Used for critical user journeys (Login, Add to Cart) to ensure the highest confidence in the production-ready flow.
* **Prioritization**: Focused on "Critical Context" such as Auth issues and Cart actions as requested.
* **Tooling**: **Playwright (TypeScript)** was selected for its superior auto-waiting, speed, and developer-friendly debugging.

## Critical Test Scenarios (Section A2)
The following scenarios are prioritized for automation:
1. **Login (Happy Path)**: Verify a seeded user can access the dashboard.
2. **Invalid Login**: Ensure appropriate error messages appear for wrong credentials.
3. **Product Discovery**: Search for an item and verify the product detail page.
4. **Add to Cart & Verify**: Add an item and assert name, price, and quantity.
5. **Cart Persistence**: Ensure items remain in the cart after a page refresh.

## Technical Implementation
### Prerequisites
* Docker and Docker Compose installed.

### How to Run Tests Locally (Section E)
1. **Clone the repository.**
2. **Set Environment Variables**: Create a `.env` file or export:
   - `BASE_URL`, `USER_EMAIL`, `USER_PASSWORD`.
3. **Execute via Docker Compose**:
   ```bash
   docker compose up --build

## Strategic Insights (Section B, C, D)

### B2. Flaky Test Prevention
* **Auto-waiting**: Utilized Playwright’s built-in wait mechanisms instead of static timeouts.
* **Locator Strategy**: Focused on user-facing attributes (Role, Text) and data-testid to ensure selectors remain stable.

### C2. Test Data Management
* **Seeding**: Used pre-existing "seeded" users for faster execution.
* **Isolation**: Every test run uses a fresh browser context to prevent state leakage.

### D1. What NOT to Automate
* **CAPTCHA/2FA**: High maintenance; should be bypassed via dev-keys or API.
* **Third-party Payment UIs**: Mocking is preferred to avoid external dependency issues.
* **Minor Visual Tweaks**: Best handled via manual exploratory testing or visual regression tools.