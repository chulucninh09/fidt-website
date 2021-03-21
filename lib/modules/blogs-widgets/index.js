module.exports = {
  extend: 'apostrophe-pieces-widgets',
  piecesModuleName: 'blogs',
  label: 'Blogs',
  addFields: [],
  filters: {
    projection: {
      title: 1,
      coverImage: 1,
      preview: 1,
      issueDate: 1,
      _url: 1
    }
  }
};