const files = [
    "KN Series Euro Profile Privacy Cyliner Detail.png",
    "KN Series Euro Profile Privacy Cyliner.jpeg",
    "KN014 Series Euro Profile Cyliner Detail.png",
    "KN014 Series Euro Profile Cyliner.jpeg",
    "ML2100_60 Mortise Deadlock Detail.png",
    "ML2100_60 Mortise Deadlock.jpeg",
    "ML2200 Mortise Sashlock Detail.png",
    "ML2200 Mortise Sashlock.jpeg",
    // Add lockcase files here after listing
];

function testMatching(fileNames) {
    const allImages = fileNames.map(fileName => {
        const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
        const isDetail = nameWithoutExt.toLowerCase().includes('detail');
        const normalizedName = nameWithoutExt.replace(/detail/i, '').trim(); // My logic

        return { fileName, nameWithoutExt, normalizedName, isDetail };
    });

    const mainImages = allImages.filter(img => !img.isDetail);
    const detailImages = allImages.filter(img => img.isDetail);

    console.log("Main Images:", mainImages.length);
    console.log("Detail Images:", detailImages.length);

    mainImages.forEach(img => {
        const match = detailImages.find(d => d.normalizedName === img.normalizedName);
        console.log(`'${img.fileName}' normalized('${img.normalizedName}') -> Match: ${match ? match.fileName : 'NONE'}`);
        if (!match) {
            // Try to find unmatched details to see why
            detailImages.forEach(d => {
                console.log(`   vs '${d.fileName}' normalized('${d.normalizedName}') -> Equal? ${d.normalizedName === img.normalizedName}`);
            });
        }
    });
}

testMatching(files);
