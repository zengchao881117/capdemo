sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nsdemo/book/test/integration/FirstJourney',
		'nsdemo/book/test/integration/pages/BooksList',
		'nsdemo/book/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nsdemo/book') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);