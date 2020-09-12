export default class Book {
    constructor(title, author, pages, read = true, fiction = true, genre = "unspecified", review = "Not yet reviewed", stars = 3) {
        this.title = title;
        this.author = author;
        this.pages = Math.abs(pages);
        this.read = read;
        this.fiction = fiction;
        this.genre = genre;
        this.review = review;
        this.stars = stars;
    }
    toggleRead() {
        this.read = !(this.read);
    }
    setGenre(genre){
        this.genre = genre;
    }
    setPages(pages){
        if (typeof pages === "number"){
            this.pages = Math.abs(pages);
            return "success";
        }
    }
    setStars(stars) {
        if (stars >= 0 && stars <= 5) {
            this.stars = stars;
            return "success";
        }
        else {
            return "not a valid rating";
        }
    }
    editReview(review) {
        if (review !== "") {
            this.review = review;
        }
        else {
            this.review = "Not yet reviewed";
        };
        return "success";
    }
};