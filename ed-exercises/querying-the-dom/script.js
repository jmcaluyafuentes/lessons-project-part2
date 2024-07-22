function findAllAnchors() {
	let allAnchors = document.querySelectorAll('a')
	return allAnchors
}

function findFirstH3() {
	let firstH3 = document.querySelector('h3')
	return firstH3
}

function findAllTextBlocks() {
	// There is a class called 'text-block'
	let textBlocks = document.getElementsByClassName('text-block')
	return textBlocks
}

function findAllNestedParagraphs() {
	// There is a div with the id "zen-requirements"
	// return all the paragraph elements inside that div
	let zenRequirementParagraphs = document.querySelectorAll('#zen-requirements>p')
	return zenRequirementParagraphs
}

function findTheFooter() {
	let footer = document.querySelector('footer')
	return footer
}

module.exports = { 
	findAllAnchors,
	findFirstH3,
	findAllTextBlocks,
	findAllNestedParagraphs,
	findTheFooter,
}
