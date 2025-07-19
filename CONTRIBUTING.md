# 🤝 Contributing to H.I.V.E. Protocol

Thank you for your interest in contributing to the H.I.V.E. Protocol! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

All contributors are expected to adhere to our Code of Conduct. Please read it before participating.

## How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Describe the bug in detail, including steps to reproduce
- Include information about your environment (OS, browser, etc.)
- If possible, provide a minimal code example that demonstrates the issue

### Suggesting Enhancements

- Use the GitHub issue tracker to suggest enhancements
- Clearly describe the enhancement and its expected benefits
- Provide examples or use cases where applicable

### Pull Requests

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Run tests and ensure they pass
5. Submit a pull request with a clear description of the changes

## Development Guidelines

### DID Implementation

The H.I.V.E. Protocol uses W3C Decentralized Identifiers (DIDs) for agent identity. When working with DIDs:

1. **Use Standard DID Methods**: Implement standard DID methods when possible (did:hive, did:web, did:key)
2. **Follow W3C Specifications**: Ensure DID Documents conform to the W3C DID specification
3. **Verification Methods**: Include appropriate verification methods in DID Documents
4. **Service Endpoints**: Properly configure service endpoints in DID Documents
5. **Security Considerations**: Implement secure DID resolution and verification

### Code Style

- Follow the established code style of the project
- Use meaningful variable and function names
- Write clear comments and documentation
- Follow the principle of least privilege

### Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a pull request
- Include both unit tests and integration tests where appropriate

### Documentation

- Update documentation to reflect your changes
- Document public APIs, classes, and methods
- Use clear, concise language
- Include examples where helpful

## Getting Help

If you need help or have questions, you can:

- Open an issue on GitHub
- Join our community discussions
- Contact the maintainers directly

## License

By contributing to the H.I.V.E. Protocol, you agree that your contributions will be licensed under the project's Apache-2.0 License.
We warmly welcome contributions to the H.I.V.E. Protocol from everyone! Whether you're a protocol designer, 
an agent developer, a technical writer, or just someone passionate about autonomous systems, your input is valuable.

By contributing, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 How to Contribute

There are many ways you can contribute to the H.I.V.E. Protocol:

### 1. Suggesting Features or Enhancements

If you have an idea for a new feature, a protocol improvement, or an enhancement to existing specifications:

* **Check existing issues**: Before creating a new one, please search through [existing issues](https://github.com/openhiveprotocol/hive/issues) to see if your idea has already been discussed.
* **Open a new issue**: If not, open a new issue using the "[Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)" template. Clearly describe your proposal, its motivation, and potential benefits to the protocol or ecosystem.

### 2. Reporting Bugs

If you find a bug, error, or inconsistency in the specification, documentation, or (once available) reference implementations:

* **Check existing issues**: Please search [existing issues](https://github.com/openhiveprotocol/hive/issues) to avoid duplicates.
* **Open a new issue**: If it's a new bug, open a new issue using the "[Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)" template. Provide detailed steps to reproduce, expected vs. actual behavior, and relevant context.

### 3. Improving Documentation

High-quality documentation is critical for protocol adoption. If you find typos, unclear sections, or want to add more examples or explanations:

* **Fork the repository**: Create a fork of the H.I.V.E. Protocol repository.
* **Make your changes**: Edit the relevant `.mdx` files located in `content/docs/protocol/`.
* **Test locally**: Follow the instructions in the [README.md](README.md) to build the documentation locally and preview your changes.
* **Submit a Pull Request**: Create a Pull Request (PR) with your changes. (See [Contributing Code](#4-contributing-code) below).

### 4. Contributing Code (for Reference Implementations / Tools)

Once reference implementations, SDKs, or tooling become available in this repository:

* **Find an open issue**: Look for issues labeled "good first issue" or "help wanted", or propose a new solution to an existing issue.
* **Fork the repository** and clone your fork.
* **Create a new branch**: Branch off the `main` branch with a descriptive name (e.g., `feat/add-noise-protocol-wrapper`, `fix/did-resolution-bug`).
* **Implement your changes**: Write your code following our coding style guidelines (if specified in future documents).
* **Write tests**: Ensure your changes are well-tested.
* **Update documentation**: If your code changes behavior or adds features, update relevant documentation.
* **Run tests**: Make sure all existing tests pass.
* **Create a Pull Request**:
* Push your branch to your fork.
* Open a Pull Request from your fork to the `main` branch of the H.I.V.E. Protocol repository.
* Fill out the Pull Request template comprehensively.
* Ensure your PR title is descriptive.

## ⚖️ Legal & Licensing

By contributing to the H.I.V.E. Protocol, you agree that your contributions will be licensed under the [Apache-2.0 License](LICENSE).

## 🔒 Security Vulnerabilities

If you discover a security vulnerability, **please do NOT open a public issue.** Refer to our [Security Policy](SECURITY.md) for instructions on how to responsibly disclose it.

---

Thank you for helping us build a robust and collaborative H.I.V.E. Protocol!