'use strict';

/**
 * @ngdoc overview
 * @name skolkaApp
 * @description
 * # skolkaApp
 *
 * Main module of the application.
 */
angular
    .module('skolkaApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'pascalprecht.translate',
        'ngFader',
        'getMaxChildHeight',
        'jkuri.gallery',
        'ui.select',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/ruzinov', {
                templateUrl: 'views/ruzinov.html',
                controller: 'RuzinovCtrl'
            })
            .when('/dunajskaluzna', {
                templateUrl: 'views/dunajskaluzna.html',
                controller: 'DunajskaluznaCtrl'
            })
            .when('/oz', {
                templateUrl: 'views/oz.html',
                controller: 'OzCtrl'
            })
            .when('/hotel', {
                templateUrl: 'views/hotel.html',
                controller: 'HotelCtrl'
            })
            .when('/party', {
                templateUrl: 'views/party.html',
                controller: 'PartyCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/montessori', {
                templateUrl: 'views/montessori.html',
                controller: 'MontessoriCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        // add translation table
        $translateProvider
            .useSanitizeValueStrategy('sanitize')
            .translations('gb', translationsEn)
            .translations('sk', translationsSk)
            .preferredLanguage('sk');
    });

var translationsSk = {
    //common
    HEADER: 'Štvorlístok',
    SUB_HEADER: 'Materská škôlka a jasle',
    NAV_HEADER: 'Skryť navigáciu',
    MOTTO: '"DIEŤA JE ZVIDITEĽNENÁ LÁSKA", Novalis',
    HOME: 'Domov',
    ABOUT_US: 'O nás',
    RUZINOV: 'Ružinov',
    DUNAJSKALUZNA: 'Dunajská Lužná',
    OZ: 'OZ štvorlístkovo',
    HOTEL: 'Zábavný detský hotel Štvorlístok',
    HOTEL_TOOLTIP: 'Doprajte vašim deťom výnimočnú starostlivosť aj cez víkendy',
    MONTESSORI_LINK: 'Maria Montessori',
    MONTESSORI_TOOLTIP: 'Spoznajte výnimočnú Mariu Montessori',
    PARTY: 'Detská oslava',
    CONTACT: 'Kontakt',
    I_WANT_TO_APPLY_MY_CHILD: 'Chcem prihlásiť svoje dieťa',
    WHY_CHOOSE_FOURLEAF_HEADER: 'Prečo si vybrať štvorlístok',
    WHY_CHOOSE_FOURLEAF_TEXT: 'Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    OUR_GOALS: 'Naše ciele',
    OUR_GOALS_TEXT: 'Ciele Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    BENEFITS: 'Špeciálne benefity',
    BENEFITS_TEXT: 'Benefity Naša materská škola a rozprávkové jasličky vznikli z dôvodu potreby zosúladenia rodinného a pracovného života zamestnaných rodičov',
    FOOTER: '&copy; Štvorlístok',
    //homepage
    HOMEPAGE: {
        WELCOME: 'Srdečne Vás vítame na stránke súkromnej materskej škôlky a jasličiek štvorlístok',
        P1: 'Ranné detstvo považujeme za rozhodujúce obdobie pre ďalší vývin a formovanie osobnosti dieťaťa, a práve preto sme sa rozhodli vytvoriť Vaším deťom podnetné a láskavé prostredie rodinného charakteru.',
        P2: 'Súkromná materská škôlka a detské jasle štvorlístok sú zariadením, ktoré ponúkajú vzdelávanie a výchovu podľa princípov pedagogiky Márie Montessori v súkromí rodinného domu s vlastnou priestrannou záhradou.',
        P3: 'Naším cieľom je rozvíjať celú osobnosť dieťaťa, a práve preto sme sa rozhodli intenzívnejšie venovať celospoločenskému problému súčasnosti, ktorým je ekológia životného prostredia. V našich zariadeniach štvorlístok sa aktívne podieľame na environmentálnych aktivitách a zapájame sa do projektu EKOLOGICKÁ STOPA, čím budujeme u detí pozitívny vzťah k životnému prostrediu a prírode.',
        P4: 'Našim detičkám je k dispozícií dvojjazyčné slovensko-anglické prostredie v ktorom sa učia anglický jazyk prirodzeným spôsobom, a osvojujú si ho ako druhý jazyk, a nie ako cudzí jazyk. Komunikácia vo viacerých jazykoch je pre deti v rannom veku jednoduchá a prirodzená, čoho názorným príkladom sú deti vyrastajúce v prostredí, v ktorom obaja rodičia rozprávajú iným jazykom.',
        P5: 'V našich zariadeniach štvorlístok si uplatňujeme zásady správneho životného štýlu, ktoré vkladáme do pozornosti deťom formou každodenného pohybu, každodenného cvičenia, športových krúžkov a prechádzok. Pohyb je pre deti samozrejmosťou a mal by ňou zostať aj v dospelosti. „Cvičenie im vo svojej podstate dáva možnosť objavovať niečo nové.”'
    },
    //montessori
    MONTESSORI: {
        LINK1: 'spoznajte výnimočnú',
        LINK2: 'Mariu Montessori'
    }

};

var translationsEn = {
    header: 'Child centre 4 leaf'
};
