// eslint-disable-next-line no-undef
module.exports = {
    // https://docs.renovatebot.com/self-hosted-configuration/#platform
    platform: "github",

    // https://docs.renovatebot.com/self-hosted-configuration/#repositories
    repositories: [
        //
        "kunihiro-mediba/renovate-sandbox",
    ],

    // https://docs.renovatebot.com/configuration-options/#branchprefix
    branchPrefix: "renovate/",

    // https://docs.renovatebot.com/self-hosted-configuration/#onboarding
    onboarding: false,

    // https://docs.renovatebot.com/self-hosted-configuration/#dryrun
    dryRun: "full",
};
