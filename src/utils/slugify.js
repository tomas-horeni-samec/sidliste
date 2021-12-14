export function slugify(text) {
  if (text !== undefined) {
    return text
      .toString()
      .toLowerCase()
      .replaceAll(/á/g, 'a')
      .replaceAll(/č/g, 'c')
      .replaceAll(/ď/g, 'c')
      .replaceAll(/é/g, 'e')
      .replaceAll(/ě/g, 'e')
      .replaceAll(/í/g, 'i')
      .replaceAll(/ň/g, 'n')
      .replaceAll(/ó/g, 'o')
      .replaceAll(/ř/g, 'r')
      .replaceAll(/š/g, 's')
      .replaceAll(/ť/g, 't')
      .replaceAll(/ú/g, 'u')
      .replaceAll(/ů/g, 'u')
      .replaceAll(/ž/g, 'z')
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
}
