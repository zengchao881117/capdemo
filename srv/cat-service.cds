using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly
    entity Books @(restrict: [{
        grant: ['*'],
        to   : ['BookManager']
    }]) as projection on my.Books;
}
