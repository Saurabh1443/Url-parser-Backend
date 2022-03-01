# Project Title :  Url-parser

 #Description: This node js app basically deals with the url scraping,means it extracts Metadata(Data about Data) from the given url.
               It expects thee  post request from the client , where the url should be present in the body section of that post request,then it uses METASCRAPER npm module 
               and some sub modules such as metascraper-image,metascraper-title,metascraper-description etc and use it to extract the data such as title,images,description,url
               from the given url and send the data in json format .
               
               For example if the given url is: url = "https://www.amazon.com" 
               then the metadata it extracts in json format will be :
                {
                   "metadata": {
                       "author": null,
                       "description": null,
                       "title": "Amazon.com",
                       "image": "https://images-na.ssl-images-amazon.com/captcha/ahkfsmoa/Captcha_otihzpiosj.jpg",
                       "url": "https://www.amazon.com/"
                       }
                 }
                 
            
   #Tools used:  1.NODE JS 
                 2.EXPRESS JS
                 3.METASCRAPPER NODE JS MODULE
                 4.NODEMON NODE JS MODULE
