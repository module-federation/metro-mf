# metro-mf

## Installation Guide

### Prerequisites

- Node.js version 22 (as specified in `.nvmrc`)
- Corepack

In case Corepack is not available, you can install it manually:

```bash
npm install -g corepack
```

### Setup Steps

1. Clone the repository with submodules:

```bash
git clone --recurse-submodules -j8 git@github.com:callstack/metro-mf.git
```

2. Navigate to the project directory:

```bash
cd metro-mf
```

3. Enable Corepack and install dependencies in the monorepo:

```bash
corepack enable && corepack install && yarn install
```

4. Navigate to the Metro submodule:

```bash
cd external/metro
```

5. Set the correct Yarn version for Metro and install dependencies:

```bash
yarn set version 1.22.22 && yarn install
```
