---
name: Standard Pull Request
about: Submit changes to the H.I.V.E. Protocol specification or related documentation.
title: "[TYPE]"
labels: ''
assignees: ''
---

**Type of change** (check all that apply):
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update (e.g., typos, clarifications, new examples)
- [ ] Chore (e.g., build process, CI/CD, tooling changes)

**Description**
Please provide a clear and concise description of your changes.
If this PR addresses an open issue, please link it here: `Fixes #ISSUE_NUMBER`

**Motivation and Context**
Why is this change required? What problem does it solve or what new capability does it introduce?

**How Has This Been Tested?**
Please describe the tests that you ran to verify your changes.
Provide instructions so we can reproduce.
Please also list any relevant details for your test configuration.
- [ ] Tested locally (e.g., `npm run dev` for documentation changes)
- [ ] Automated tests (e.g., unit, integration tests, if applicable to future code contributions)

**Checklist (for the Contributor)**:
- [ ] My code follows the project's coding style guidelines (if applicable).
- [ ] I have performed a self-review of my own code.
- [ ] I have commented my code, particularly in hard-to-understand areas.
- [ ] I have made corresponding changes to the documentation (if necessary).
- [ ] My changes generate no new warnings or errors.
- [ ] I have added tests that prove my fix is effective or that my feature works.
- [ ] New and existing unit/integration tests pass locally with my changes.
- [ ] I have ensured my changes are backward compatible (unless it's a breaking change, clearly stated).
- [ ] I have updated the `protocol_version` in relevant message headers if this introduces a `MAJOR` or `MINOR` change per [Versioning Strategy](https://openhive.sh/docs/protocol/guidelines/versioning).

**Reviewer Checklist (for the Maintainer)**:
- [ ] Code is well-structured and easy to understand.
- [ ] Changes align with the H.I.V.E. Protocol specification.
- [ ] Tests are sufficient and cover edge cases.
- [ ] Documentation is updated and accurate.
- [ ] No regressions or unexpected side effects.

**Screenshots (if appropriate):**
If this PR includes visual changes (e.g., to documentation layout), please include screenshots here.

---