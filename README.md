# Chang Zeng's GitHub Pages site

The academic homepage is in `_pages/about.md`. Agentic Research has separate static
information pages in `app/agentic-research/`; `tmp/` contains the original drafts and
is excluded from the Jekyll build. The Discord Agent policies remain separate.

## Agentic Research and Google OAuth branding

After the changes are deployed through this repository's GitHub Pages publishing setup,
use the following values in Google Auth Platform > Branding:

| Field | Value |
| --- | --- |
| App name | Agentic Research |
| User support email | changzeng@umass.edu |
| Application home page | https://chang-zeng.github.io/app/agentic-research/ |
| Privacy policy | https://chang-zeng.github.io/app/agentic-research/privacy.html |
| Terms of service | https://chang-zeng.github.io/app/agentic-research/terms.html |
| Authorized domain | chang-zeng.github.io |
| Developer contact email | changzeng@umass.edu |

The app name must match the OAuth consent screen. Google's brand-verification guidance
describes Terms of Service as optional; use the Agentic Research URL above for that field.
The existing Discord Agent terms describe a different service.
The draft's source-code link was omitted because the linked repository was private
when these pages were prepared. Do not describe it as publicly open source until a
public repository and license are available.

For ownership verification, add a URL-prefix property for
`https://chang-zeng.github.io/` in Google Search Console. The existing
`google_site_verification` setting in `_config.yml` is available for the HTML-tag
verification value on the academic homepage. Alternatively, place Google's exact
verification HTML file at the repository root. No verification token is included in
this change. Verify ownership with an account associated with the OAuth Cloud project.

Check all three public URLs before submitting them. Save Branding, then use Audience to
change the app from Testing to In production when Google permits it. Reauthorize
the local connectors afterward. Production removes the special seven-day Testing
refresh-token limit; tokens can still expire or be revoked for other reasons.
Brand verification and sensitive/restricted-scope verification are separate processes;
these website files do not complete them or change your Cloud project's settings.

References: [Google brand verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification),
[refresh-token expiration](https://developers.google.com/identity/protocols/oauth2#expiration),
and [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy).

The privacy policy covers the local Gmail and Workspace connectors from the draft.
Keep it synchronized with their actual scopes, storage, and provider data flows.
Other optional or hosted integrations need disclosures reflecting their own behavior.

---

A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

### Note: if you are using this repo and now get a notification about a security vulnerability, delete the Gemfile.lock file. 

# Instructions

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll liveserve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

# Changelog -- bugfixes and enhancements

There is one logistical issue with a ready-to-fork template theme like academic pages that makes it a little tricky to get bug fixes and updates to the core theme. If you fork this repository, customize it, then pull again, you'll probably get merge conflicts. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch. 

To support this, all changes to the underlying code appear as a closed issue with the tag 'code change' -- get the list [here](https://github.com/academicpages/academicpages.github.io/issues?q=is%3Aclosed%20is%3Aissue%20label%3A%22code%20change%22%20). Each issue thread includes a comment linking to the single commit or a diff across multiple commits, so those with forked repositories can easily identify what they need to patch.
