## Mini Plataforma de Cursos - Frontend

<p align="center">
<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
</p>

---

A containerized online course platform designed to provide a scalable, modern learning management system with real-time features and AI-powered assistance.

### Technology Stack

#### Frontend
- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Component Development**: Storybook
- **State Management**: TBD (Redux/Zustand/React Query)

---

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- [Docker & Docker Compose for development]

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Testing
```bash
npm test        # Unit tests
npm run test:e2e # E2E tests

---

## 🌳 Git Flow Standards

### Branch Structure

```
main (production)
├── develop (integration)
    ├── feature/short-description
    ├── bugfix/short-description
    ├── hotfix/short-description
    ├── docs/short-description
    └── release/v[version-number]
```

### Branch Types

#### 1. **main**
- Production-ready code only
- Protected branch (requires PR + reviews)
- Tagged with version numbers
- Deployed to production

#### 2. **develop**
- Integration branch
- Latest development changes
- Source for feature branches
- Deployed to staging environment

#### 3. **feature/**
- New features and enhancements
- Format: `feature/[brief-description]`
- Example: `feature/user-authentication`
- Merged into: `develop`

#### 4. **bugfix/**
- Bug fixes for issues found in develop
- Format: `bugfix/[brief-description]`
- Example: `bugfix/fix-login-validation`
- Merged into: `develop`

#### 5. **hotfix/**
- Critical fixes for production
- Format: `hotfix/[brief-description]`
- Example: `hotfix/fix-payment-crash`
- Merged into: `main` AND `develop`

### 6. **docs/**
- Documentation updates
- Format: `docs/[brief-description]`
- Example: `docs/update-api-documentation`
- Merged into: `develop`

#### 7. **release/**
- Preparation for production release
- Format: `release/v[MAJOR.MINOR.PATCH]`
- Example: `release/v1.2.0`
- Merged into: `main` and `develop`

### Branch Naming Rules
- Use lowercase letters
- Separate words with hyphens (-)
- Keep description brief but descriptive
- No special characters except hyphens
- Maximum length: 50 characters

---

## 💬 Commit Message Standards

### Format
We follow the **Conventional Commits** specification with **Commitlint** enforcement.

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(auth): add JWT token refresh` |
| `fix` | Bug fix | `fix(video): resolve streaming buffer issue` |
| `docs` | Documentation | `docs(readme): update installation steps` |
| `style` | Code style changes | `style(button): format component spacing` |
| `refactor` | Code refactoring | `refactor(api): simplify user service logic` |
| `perf` | Performance improvement | `perf(db): add index to course queries` |
| `test` | Adding tests | `test(auth): add unit tests for login` |
| `build` | Build system changes | `build(docker): update node version` |
| `ci` | CI/CD changes | `ci(github): add automated testing` |
| `chore` | Maintenance tasks | `chore(deps): update dependencies` |
| `revert` | Revert previous commit | `revert: revert feat(auth): add JWT` |

### Scope Examples
- `auth` - Authentication
- `course` - Course management
- `video` - Video functionality
- `payment` - Payment system
- `ui` - User interface
- `api` - API changes
- `db` - Database
- `docker` - Docker configuration
- `k8s` - Kubernetes configuration

### Commit Message Rules
1. **Type**: Required, lowercase
2. **Scope**: Optional but recommended
3. **Subject**: 
   - Required
   - Lowercase first letter
   - No period at the end
   - Maximum 72 characters
   - Imperative mood ("add" not "added")
4. **Body**: 
   - Optional
   - Explain WHAT and WHY, not HOW
   - Wrap at 72 characters
5. **Footer**: 
   - Optional
   - Reference issues: `Closes #123`
   - Breaking changes: `BREAKING CHANGE: description`

### Examples

#### Simple Commit
```bash
feat(course): add course creation endpoint
```

#### Detailed Commit
```bash
feat(auth): implement JWT refresh token mechanism

Add automatic token refresh when access token expires.
Includes new refresh endpoint and client-side interceptor.

Closes #CP-123
```

#### Breaking Change
```bash
feat(api): migrate to GraphQL

Replace REST endpoints with GraphQL API for better
flexibility and reduced over-fetching.

BREAKING CHANGE: All REST endpoints removed. Clients must
migrate to GraphQL queries.

Closes #CP-456
```

---

## 🔀 Pull Request Process

### Pull Request Template

```markdown
## 📝 Description
<!-- Provide a clear and concise description of what this PR does -->

## 🎫 Related Issue
<!-- Link to the GitHub Project card or issue -->
Closes #[issue-number]

## 🔄 Type of Change
<!-- Mark the relevant option with an 'x' -->
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI update
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement
- [ ] ✅ Test update

## 🧪 Testing
<!-- Describe the tests you ran and how to reproduce them -->
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

### Test Steps:
1. Step 1
2. Step 2
3. Step 3

## 📸 Screenshots (if applicable)
<!-- Add screenshots for UI changes -->

## ✅ Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## 🔗 Dependencies
<!-- List any dependencies required for this PR -->
- None

## 📋 Additional Notes
<!-- Any additional information that reviewers should know -->
```

### PR Requirements

#### Before Opening a PR
1. ✅ All commits follow conventional commit format
2. ✅ Code is properly formatted and linted
3. ✅ All tests pass locally
4. ✅ Branch is up to date with target branch
5. ✅ No merge conflicts
6. ✅ Documentation is updated if needed

#### PR Title Format
```
<type>(<scope>): <brief description> (#ticket-number)
```

**Examples:**
- `feat(auth): implement OAuth2 login (#CP-123)`
- `fix(video): resolve playback stuttering (#CP-456)`
- `docs(readme): add deployment instructions (#CP-789)`

#### Review Process
1. **Automatic Checks**: CI/CD pipeline runs
   - Linting
   - Unit tests
   - Integration tests
   - Build verification
   - Security scanning

2. **Code Review**: Minimum 1 approval required
   - At least 1 from a team member familiar with the feature area

3. **Review Guidelines for Reviewers**:
   - Check code quality and adherence to standards
   - Verify tests are adequate
   - Test the changes locally if possible
   - Provide constructive feedback
   - Approve only when satisfied

4. **Addressing Feedback**:
   - Respond to all comments
   - Make requested changes
   - Push additional commits (don't force-push during review)
   - Request re-review after changes

5. **Merging**:
   - Squash and merge (for feature branches)
   - Merge commit (for release branches)
   - Update ticket status in GitHub Projects
   - Delete branch after merge

---

## 📖 Complete Workflow Example

### Scenario
You're assigned to implement a new feature: "Add course rating system"
- Ticket: CP-234
- Sprint: Sprint 5
- Estimate: 5 story points

### Step-by-Step Guide

#### 1. Clone the Repository (First Time)
```bash
# Clone the repository
git clone [github-repo-link]

# Navigate to the project directory
cd github-repo

# Verify you're on the main branch
git branch

# Expected output: * main
```

#### 2. Set Up Your Local Environment
```bash
# Install dependencies (if applicable)
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your local configuration

# Verify the setup
npm run lint
npm test
```

#### 3. Update Your Local Repository
```bash
# Fetch all remote branches
git fetch origin

# Switch to develop branch
git checkout develop

# Pull latest changes
git pull origin develop

# Verify you have the latest code
git log --oneline -5
```

#### 4. Create Your Feature Branch
```bash
# Create and switch to new feature branch
git checkout -b feature/add-course-rating-system

# Verify you're on the correct branch
git branch
# Expected output: * feature/add-course-rating-system
```

#### 5. Move Ticket in GitHub Projects
- Go to GitHub Projects board
- Move ticket CP-234 from "To Do" to "In Progress"
- Assign yourself to the ticket
- Add any labels (e.g., `frontend`, `backend`, `enhancement`)

#### 6. Implement Your Feature
```bash
# Make your changes to the codebase
# Example files you might create/modify:
# - backend/src/modules/rating/rating.module.ts
# - backend/src/modules/rating/rating.service.ts
# - backend/src/modules/rating/rating.controller.ts
# - frontend/src/components/CourseRating.tsx
# - frontend/src/components/CourseRating.stories.tsx

# Check which files you've changed
git status

# View your changes
git diff
```

#### 7. Write Tests
```bash
# Create test files
# - backend/src/modules/rating/rating.service.spec.ts
# - frontend/src/components/CourseRating.test.tsx

# Run tests locally
npm test

# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

#### 8. Commit Your Changes
```bash
# Stage specific files (recommended)
git add backend/src/modules/rating/
git add frontend/src/components/CourseRating.tsx

# Or stage all changes (use with caution)
git add .

# Commit with proper message format
git commit -m "feat(course): add rating system for courses

- Add rating service with CRUD operations
- Create rating component with star display
- Add rating validation (1-5 stars)
- Include user authentication check
- Add rating aggregation for course display

Closes #CP-234"

# If your commit message fails commitlint:
# - Fix the format
# - Amend the commit
git commit --amend
```

#### 9. Make Additional Commits (if needed)
```bash
# After code review or additional work
git add .
git commit -m "test(rating): add unit tests for rating service"

git add .
git commit -m "docs(rating): add API documentation for rating endpoints"
```

#### 10. Keep Your Branch Updated
```bash
# Fetch latest changes from remote
git fetch origin

# Rebase your branch on top of latest develop
git rebase origin/develop

# If conflicts occur:
# 1. Fix conflicts in your editor
# 2. Stage resolved files
git add <resolved-file>

# 3. Continue rebase
git rebase --continue

# If you want to abort rebase
git rebase --abort
```

#### 11. Push Your Branch to GitHub
```bash
# First push (creates remote branch)
git push -u origin feature/add-course-rating-system

# Subsequent pushes
git push

# If you rebased and need to force push (use with caution)
git push --force-with-lease
```

#### 12. Open a Pull Request

##### Navigate to GitHub
1. Go to the GitHub project repository
2. Click "Pull requests" tab
3. Click "New pull request"
4. Select:
   - **Base**: `develop`
   - **Compare**: `feature/add-course-rating-system`
5. Click "Create pull request"

##### Fill Out the PR Template
```markdown
## 📝 Description
This PR implements a comprehensive rating system for courses, allowing students to rate courses from 1 to 5 stars. The system includes backend API endpoints for CRUD operations and a frontend component with an interactive star rating interface.

## 🎫 Related Issue
Closes #CP-234

## 🔄 Type of Change
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [x] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI update
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement
- [ ] ✅ Test update

## 🧪 Testing
- [x] Unit tests pass
- [x] Integration tests pass
- [x] Manual testing completed

### Test Steps:
1. Navigate to any course page
2. Scroll to the rating section
3. Click on stars to set rating (1-5)
4. Submit rating
5. Verify rating appears in course overview
6. Check that average rating updates correctly

## 📸 Screenshots
![Rating Component](https://placeholder.com/rating-component.png)
![Course with Ratings](https://placeholder.com/course-ratings.png)

## ✅ Checklist
- [x] My code follows the project's style guidelines
- [x] I have performed a self-review of my code
- [x] I have commented my code, particularly in hard-to-understand areas
- [x] I have made corresponding changes to the documentation
- [x] My changes generate no new warnings
- [x] I have added tests that prove my fix is effective or that my feature works
- [x] New and existing unit tests pass locally with my changes
- [x] Any dependent changes have been merged and published

## 🔗 Dependencies
- Requires authentication service (already merged)
- Requires course service (already merged)

## 📋 Additional Notes
- Average rating calculation is cached in Redis for performance
- Rating updates are reflected in real-time via WebSocket
- Future enhancement: Add rating distribution histogram
```

#### 13. Code Review Process
```bash
# After receiving review comments:

# Pull latest changes from your branch
git pull origin feature/add-course-rating-system

# Make requested changes
# ... edit files ...

# Commit changes
git add .
git commit -m "refactor(rating): improve validation logic

Address review feedback from @reviewer
- Add input sanitization
- Improve error messages
- Extract validation to separate function"

# Push updates
git push
```

#### 14. After PR Approval
```bash
# Update GitHub Projects
# Move ticket CP-234 from "In Review" to "Done"

# After merge, clean up local branches
git checkout develop
git pull origin develop

# Delete local feature branch
git branch -d feature/add-course-rating-system

# Delete remote branch (usually done automatically by GitHub)
git push origin --delete feature/add-course-rating-system
```

#### 15. Verify Deployment
```bash
# Check staging environment
# https://staging.yourplatform.com

# Verify feature works as expected
# Monitor logs and metrics
```

---

## 🎯 Best Practices

### Code Quality

#### 1. **Write Clean Code**
- Follow DRY principle (Don't Repeat Yourself)
- Use meaningful variable and function names
- Keep functions small and focused
- Comment complex logic

#### 2. **Testing**
- Write unit tests for all business logic
- Aim for >80% code coverage
- Write integration tests for API endpoints
- Test edge cases and error scenarios

#### 3. **Code Review**
- Review your own code before requesting review
- Be respectful and constructive in feedback
- Explain your reasoning for suggestions
- Be open to feedback

### Git Best Practices

#### 1. **Commit Frequency**
- Commit often, commit early
- Each commit should be a logical unit of work
- Avoid "WIP" or "fix" commits in final PR

#### 2. **Branch Management**
- Keep branches short-lived (< 2 days ideal)
- Rebase frequently to stay updated
- Delete branches after merge

#### 3. **Merge Strategy**
- Squash and merge for feature branches
- Keep commit history clean in main/develop
- Use merge commits for release branches

---

### Security

#### 1. **Sensitive Data**
- Never commit secrets, API keys, or passwords
- Use environment variables
- Review .gitignore before first commit

#### 2. **Dependencies**
- Keep dependencies updated
- Review security alerts
- Use `npm audit` regularly

#### 3. **Code Review Security Checklist**
- Check for SQL injection vulnerabilities
- Verify input validation
- Check authentication/authorization
- Review data exposure in APIs

### Performance

#### 1. **Frontend**
- Lazy load components and images
- Optimize bundle size
- Use proper caching strategies
- Monitor Core Web Vitals

---

### Learn More about NextJs

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
