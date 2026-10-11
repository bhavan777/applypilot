# ApplyPilot

A local-first Chrome extension that helps review and fill job application forms using reusable personal profiles. It is an early MVP intended for local development and manual testing.

## Features in this MVP

- Multiple independent profiles stored in `chrome.storage.local`.
- Configurable default profile and active profile selection.
- First-run profile creation and profile switching.
- Manual profile editor with personal, professional, and application preference fields.
- Custom reusable fields.
- Import/export of ApplyPilot JSON profiles and basic extraction from text-based resume files (`.txt`, `.md`, `.csv`). PDF/DOCX parsing is not included yet.
- Job-page heuristic and injected ApplyPilot floating button.
- Review panel with labels, values, confidence, select-ready, and selective autofill.
- Missing values and uncertain matches are shown instead of guessed.
- No automatic application submission, backend, remote AI calls, or profile sync.

## Important limitations

- A LinkedIn URL can be saved as a profile field. Direct profile fetching is intentionally not implemented: LinkedIn access is restricted and a URL alone does not grant permission to retrieve a profile. Use a profile export, a text resume, or manual entry.
- The page detector is heuristic and can miss some application pages or show on pages with job-related text.
- The field recognizer is deterministic and will not recognize every field. Always review values before using them.
- Checkbox/radio fields, file uploads, custom widgets, iframe-contained forms, and some React-controlled components need further adapter-specific handling. Selects are filled only when a matching option is found.
- `chrome.storage.local` is local browser storage, not a password vault or guaranteed encrypted store. Other people with access to the same Chrome profile may be able to access these profiles.
- Content scripts run on all sites for detection. This broad host permission is required for automatic detection, but should be reviewed before distribution. The extension does not send page or profile data to a remote service.

## Setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run typecheck
npm run build
```

Then load the unpacked extension:

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked** and choose the `dist` directory.
4. Pin ApplyPilot to the toolbar.
5. Open the extension and select **Manage profiles** to create profiles and choose the default.

## Local data model

The extension stores a single key (`applypilot.state.v1`) in `chrome.storage.local`. It contains `profiles`, `activeProfileId`, and `defaultProfileId`. Every profile has its own data object and custom fields. Changing the default never overwrites a profile's data.

## Privacy

- No backend or telemetry.
- No `chrome.storage.sync`.
- No remote AI/API calls.
- No automatic form submission.
- Form values are inserted only after the user clicks **Fill selected fields**.

## Suggested next steps

1. Add local PDF/DOCX resume parsing.
2. Improve detection and matching for common ATS platforms using isolated adapters.
3. Add a pre-fill diff/undo action and stronger post-fill verification.
4. Add robust tests and package a release ZIP after testing against representative forms.
5. Consider optional profile lock/encryption only with a clearly documented threat model.
