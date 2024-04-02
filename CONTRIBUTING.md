# Contributing to tz
We want to make contributing to this project as approachable and transparent as
possible.

## Our Development Process
We use GitHub to sync code to and from our internal repository. We'll use GitHub
to track issues and feature requests, as well as accept pull requests.

## Pull Requests
We actively welcome your pull requests.

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

## Coding Style  
* 2 spaces for indentation rather than tabs
* 80 character line length

## Issues
We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue.
If possible please provide a minimal demo of the problem.

## Issue Triage
Here are some tags that we're using to better organize issues in this repo:

* `good first issue` - Good candidates for someone new to the project to contribute.
* `help wanted` - Issues that should be addressed and which we would welcome a
PR for but may need significant investigation or work
* `support` - Request for help with a concept or piece of code but this isn't an
issue with the project.
* `needs more info` - Missing repro steps or context for both project issues \&
support questions.
* `discussion` - Issues where folks are discussing various approaches \& ideas.
* `question` - Something that is a question specifically for the maintainers.
* `documentation` - Relating to improving documentation for the project.
- Browser \& OS-specific tags for anything that is specific to a particular
environment (e.g. `chrome`, `firefox`, `macos`, `android` and so forth).

## Stability
Our philosophy regarding API changes is as follows:
 * We will avoid changing APIs and core behaviors in general
 * In order to avoid stagnation we will allow for API changes in cases where
 there is no other way to achieve a high priority bug fix or improvement.
 * When there is an API change:
    * Changes will have a well documented reason and migration path
    * When deprecating a pattern, these steps will be followed:
        * We will test the change internally first at FB
        * A version will be released that supports both, with deprecation warnings
        * The following version will fully remove the deprecated pattern

## License
By contributing to tz, you agree that your contributions will be licensed
under its MIT license.
