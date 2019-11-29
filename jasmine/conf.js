
exports.config = {
    specs: ['specs/*_spec.js'],
    // exclude: ['specs/flaky/**.js'],

    baseUrl: 'https://github.com/',

    framework: 'jasmine2',

    /**
     * It is an arbitrary
     * object and can contain anything you may need in your test.
     * This can be changed via the command line as:
     *   --params.login.user "Joe"
     * Can be accessed from your test as browser.params.
     */
    params: {},

    /**
     * ChromeDriver location is used to help find the chromedriver binary.
     * This will be passed to the Selenium jar as the system property
     * webdriver.chrome.driver. If null, Selenium will attempt to find
     * ChromeDriver using PATH.
     */
    chromeDriver: (() => {
        if (process.platform === 'darwin' | process.platform === 'linux') {
            return '../node_modules/chromedriver/bin/chromedriver';
        }
        else {
            return '../node_modules/chromedriver/lib/chromedriver/chromedriver.exe';
        }
    })(),

    /**
     * If true, Protractor will connect directly to the browser Drivers
     * at the locations specified by chromeDriver and firefoxPath. Only Chrome
     * and Firefox are supported for direct connect.
     *
     * default: false
     */
    // directConnect: (() => {
    //     return !(process.platform === 'linux')
    // })(),
    directConnect: true,
    // ---- To connect to a Selenium Server which is already running ----------
    /**
     * The address of a running Selenium Server. If specified, Protractor will
     * connect to an already running instance of Selenium. This usually looks like
     * seleniumAddress: 'http://localhost:4444/wd/hub'
     */

    /**
     * If true, protractor will restart the browser between each test.
     * CAUTION: This will cause your tests to slow down drastically.
     */
    restartBrowserBetweenTests: false,

    /**
     * If set, Protractor will ignore uncaught exceptions instead of exiting
     * without an error code. The exceptions will still be logged as warnings.
     */
    ignoreUncaughtExceptions: true,

    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        /**
         * If this is set to be true, specs will be sharded by file (i.e. all
         * files to be run by this set of capabilities will run in parallel).
         * Default is false.
         */
        shardTestFiles: false,

        /**
         * Maximum number of browser instances that can run in parallel for this
         * set of capabilities. This is only needed if shardTestFiles is true.
         * Default is 1.
         */
        maxInstances: 1,

        acceptInsecureCerts: true,

        browserName: 'chrome',

        sessionTimeout: "180s",

        chromeOptions: {

            perfLoggingPrefs: {
                'enableNetwork': true,
                'enablePage': false,
            },
            args: [
                '--window-size=1920,1080',
                '--disable-gpu',
                '--test-type',
                '--disable-extensions',
                '--enable-crash-reporter-for-testing',
                '--no-sandbox',
                '--disable-infobars'
            ],
            prefs: {
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false,
                'unexpectedAlertBehaviour': 'ignore',
            }
        },

        loggingPrefs: {
            driver: 'ALL',
            browser: 'SEVERE',
            performance: 'ALL'
        }
    },

    allScriptsTimeout: 60 * 1000, // 1min, Default time to wait for any script.

    jasmineNodeOpts: {
        defaultTimeoutInterval: 15 * 60 * 1000, // 15min, Default time to wait before a test fails.
        showColors: true
    },

    onPrepare: async () => {
        // implicit global wait
        await browser.manage().timeouts().implicitlyWait(500);
        await browser.manage().window().setSize(1366, 768);
        afterEach(async () => {
            await browser.manage().timeouts().implicitlyWait(500);
        });

        // console output
        const ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter;
        const consoleReporterOptions = {
            startingSpec: true
        };
        jasmine.getEnv().addReporter(new ConsoleReporter(consoleReporterOptions));
    }
};
