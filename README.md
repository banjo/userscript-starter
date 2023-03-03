# pkg-name

Simple starter template for userscripts.

## Technologies

-   pnpm
-   vite-plugin-monkey
-   bumpp

## Usage

```bash
# build
pnpm run build

# develop
pnpm run develop

# release
pnpm run release

# format
pnpm run format
```

## Build

The dist folder is included in the git history, allowing Github to be used as a source.

When it is time for a new build, commit all changes and run `pnpm run release` which will:

-   Bump up the package version
-   Build with the new version
-   Add a tag
-   Commit the changes
-   Push
