# 5. Adoption of Conventional Commits and Release Please for Releases

Date: 2024-03-23

## Context

This ADR proposes adopting two tools to streamline the release process:

* Conventional Commits: A specification for writing clear and consistent commit messages.
* Release Please: A tool that automates changelog generation, release creation, and version bumping based on conventional commits.

## Decision

We will adopt both Conventional Commits and Release Please for managing releases in this project.

## Alternatives Considered

- Manual Release Management: This involves manually writing changelogs, creating releases, and bumping version numbers, which is prone to errors and inconsistencies.
- Custom Scripting:  Developing custom scripts to automate release tasks requires significant upfront effort and maintenance.

## Consequences

Benefits of Using Conventional Commits and Release Please:

- Improved Release Consistency: Conventional Commits ensures clear and standardized commit messages, allowing Release Please to accurately generate changelogs.
- Automation: Release Please automates tedious tasks like changelog generation and version bumping, reducing manual effort and potential errors.
- Simplified Release Workflow: The combination streamlines the release process, making it more efficient and transparent.

Potential Drawbacks:

- Initial Learning Curve: Developers need to learn the Conventional Commits format for writing commit messages effectively.
