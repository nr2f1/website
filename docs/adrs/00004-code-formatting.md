# 4. Code Formatting with Biome vs. Prettier & ESLint

Date: 2024-03-23

## Context

This ADR explores adopting Biome, a unified code formatting tool, instead of using the combination of Prettier and ESLint for code formatting and linting.

## Decision

We will evaluate Biome for a trial period before deciding on its adoption as the primary code formatting tool.

## Alternatives Considered

- Current Approach (Prettier + ESLint): This is the current standard, with Prettier handling code formatting and ESLint enforcing code style and catching syntax errors.

## Consequences:

Benefits of Biome:

- Unified Tool: Biome simplifies the development workflow by combining multiple functionalities into one tool.
- Potential for Improved Efficiency: Biome could streamline code formatting and linting processes, reducing development time.
- Reduced Configuration Overhead: Biome might require less configuration compared to managing Prettier and ESLint separately.

Drawbacks of Biome:

- New Tool Adoption:  Developers will need to learn and adapt to a new tool.
- Potential Ecosystem Immaturity: Biome might have a less mature ecosystem of plugins and integrations compared to Prettier and ESLint.
- Evaluation Time: Implementing a trial period will require time investment to assess Biome's effectiveness within the project.

