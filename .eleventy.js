export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
      
    
    // Voeg watch targets toe om herbouw te triggeren bij wijzigingen
    eleventyConfig.addWatchTarget("./src/css/");
    
    // Return statement komt aan het einde
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
