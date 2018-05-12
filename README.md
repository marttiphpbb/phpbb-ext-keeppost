# PhpBB Extension - marttiphpbb Keep Post

## Requirements

phpBB 3.2+ PHP 7+

## Features

When the session expires before hitting the "submit" whilst posting and having to login again, this extension stores the data of the post form in the browser (sessionStorage) and restores it when returning to the posting page.
(In the normal behaviour of phpBB 3.2+ the form will be empty upon returning).

## Quick Install

You can install this on the latest release of phpBB 3.2 by following the steps below:

* Create `marttiphpbb/keeppost` in the `ext` directory.
* Download and unpack the repository into `ext/marttiphpbb/keeppost`
* Enable `Keep Post` in the ACP at `Customise -> Manage extensions`.

## Uninstall

* Disable `Keep Post` in the ACP at `Customise -> Extension Management -> Extensions`.
* To permanently uninstall, click `Delete Data`. Optionally delete the `/ext/marttiphpbb/keeppost` directory.

## Support

* Report bugs and other issues to the [Issue Tracker](https://github.com/marttiphpbb/phpbb-ext-keeppost/issues).

## License

[GPL-2.0](license.txt)
