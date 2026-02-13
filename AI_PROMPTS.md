```markdown
# AI_PROMPTS.md

## 1. Exact Prompts Used
* "Interpret a Senior QA assessment for an e-commerce app and list critical scenarios."
* "Generate a Dockerfile and docker-compose for a Playwright TypeScript project."
* "Draft a README section explaining why CAPTCHA should not be automated from a Senior QA perspective."

## 2. How AI Accelerated the Process
* **Initial Setup**: AI generated the boilerplate for Docker and Playwright configuration in minutes.
* **Strategy Drafting**: AI helped synthesize high-level QA concepts into concise documentation.

## 3. Rejected AI Suggestions
* **Suggestion**: Automating the full Registration flow for every test.
* **Reason for Rejection**: Rejected to save time. I chose a "seeded user" approach to focus on "Signal > Coverage" as per the timebox constraint.

## 4. Validation of Correctness
* Verified that the generated Dockerfile uses the official Playwright image (`mcr.microsoft.com/playwright`).
* Manually reviewed the test logic to ensure assertions were meaningful and environment variables were correctly mapped.