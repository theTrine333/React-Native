import axios from "axios";
import * as cheerio from 'cheerio';

const mainUrl = "https://www.libgen.is/";
const uniqueBooks = new Set();
export async function getSearch(search,setLoading,isError) {
    try {
        search = search.replace(/ /g, "%20");
        const main_url = `https://libgen.li/index.php?req=${search}&columns%5B%5D=t&columns%5B%5D=a&columns%5B%5D=s&columns%5B%5D=y&columns%5B%5D=p&columns%5B%5D=i&objects%5B%5D=f&objects%5B%5D=e&objects%5B%5D=s&objects%5B%5D=a&objects%5B%5D=p&objects%5B%5D=w&topics%5B%5D=l&topics%5B%5D=c&topics%5B%5D=f&topics%5B%5D=a&topics%5B%5D=m&topics%5B%5D=r&topics%5B%5D=s&res=50&covers=on&filesuns=sort`;
        const response = await axios.get(main_url);

        const books = [];
        
        const $ = cheerio.load(response.data);
        const bookLists = $("table.table.table-striped tbody").find("tr");

        bookLists.each((index, element) => {
            const Url = $(element).find("a").attr("href");
            const tempPoster = $(element).find("a img").attr("src");
            const Poster = tempPoster ? `https://libgen.li${tempPoster}` : "";
            const bookName = $(element).find("td").eq(1).find("a").text().trim();
            const bookAuthers = $(element).find("td").eq(2).text().trim();
            const yearOfPub = $(element).find("td").eq(4).text().trim();
            const language = $(element).find("td").eq(5).text().trim();
            const downloadSize = $(element).find("td").eq(7).text().trim();
            const fileType = $(element).find("td").eq(8).text().trim();
            const server1 = `https://libgen.li${$(element).find("td").eq(9).find("a").eq(0).attr('href')}`;
            const server2 = $(element).find("td").eq(9).find("a").eq(1).attr('href');
            const server3 = $(element).find("td").eq(9).find("a").eq(2).attr('href');

            const bookDetails = `${bookName}_${fileType}`;
            if (!uniqueBooks.has(bookDetails) && fileType == "pdf" ) { // Check if book details are not already in the set
                uniqueBooks.add(bookDetails);
                books.push({
                    "book_url": Url,
                    "poster": Poster,
                    "title": bookName,
                    "authors": bookAuthers,
                    "yearOfPub": yearOfPub,
                    "lang": language,
                    "size": downloadSize,
                    "Ext": fileType,
                    "download_server": server1,
                    "backup_server": server2,
                    "backup_server2": server3
                });
            }
        });
        return books;

    } catch (error) {
        setLoading(false)
        isError(true)
        return []
    }
}

export async function getBookDetails(bookUrl) {
    try {
        const response = await axios.get(bookUrl);
        const $ = cheerio.load(response.data);
        const bookTitle = $("h1").text();
        const downloadLink = $("h2 a").attr("href");
        const bookPoster = $("img").attr("src");
        const bookDescriptions = $("div").eq(3).text().slice(12).trim();
        return [bookTitle, bookPoster, downloadLink, bookDescriptions];
    } catch (error) {
        console.error("An Error occurred: ", error);
        return []
    }
}

export async function getPoster(bookUrl){
    try{
        const response = await axios.get(bookUrl)
        const $ = cheerio.load(response.data);
        const bookPoster = $("img").attr("src");
        console.log("https://library.lol",bookPoster)
    }catch (error) {
        console.error("An Error occurred: ", error);
    }
    
    // setImageUrl(bookPoster);
}


// Example usage:
// searchBooks("Python+Bible").then(console.log).catch(console.error);
// getBookDetails("http://library.lol/main/9B92BD72B11D0F504490488CA35A2D35").then(console.log).catch(console.error);