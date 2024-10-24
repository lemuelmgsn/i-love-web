const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // zorgt ervoor dat de assets en css ook naar de public wordt gestuurd
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
      
    // Voeg watch targets toe om te herbouwen te bij wijzigingen
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/assets");

    // 
    eleventyConfig.addFilter("postDate", (dateObj) => {
        // Returns the date from .md date
        return DateTime.fromJSDate(dateObj).
        // converts to string
        toLocaleString(DateTime.DATE_MED);
    });
    
    // Return statement komt aan het einde
    return {
        dir: {
            // alle files waar je in werkt
            input: "src",
            // alle files die uitkomen
            output: "public",
        }
    };
}
