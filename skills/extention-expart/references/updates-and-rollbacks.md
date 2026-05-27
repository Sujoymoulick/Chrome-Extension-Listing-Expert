# Updates, Rollouts, and Rollbacks

## Upgrading Items
- **Upload New Package**: Increment the `version` number in `manifest.json`.
- **Review**: Every upgrade triggers a new review process.
- **Deferred Publishing**: You can choose to manually publish *after* the review passes (staged submission valid for 30 days).

## Percentage Rollouts (Partial Rollout)
- **Eligibility**: Items with >10,000 seven-day active users.
- **Usage**: Restrict update to a fraction of the user base.
- **Update**: You can increase the percentage on the "Package" tab without a new review.
- **Limitation**: Cannot run multiple partial rollouts simultaneously.

## Rollbacks
- **How it Works**: Reverts to the previous published version under a *new* (higher) version number.
- **Speed**: Usually live within a minute; does not require review.
- **Data Safety**: Ensure backward compatibility to avoid breaking the extension or causing data loss for users.
- **Rollout Impact**: Performing a rollback during a partial rollout discards the partial version and reverts to the 100% deployed version.

## Verified CRX Uploads
- **Security**: Adds a layer of protection by requiring packages to be signed with an RSA-2048 key pair.
- **Opt-in**: Enable via the "Package" section in the dashboard.
- **Signing**: Use `google-chrome --pack-extension` or equivalent tools to create signed `.crx` files.
