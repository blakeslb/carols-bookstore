const Author = require("../models/authorModel");

module.exports = {
	all: (request, response) => {
		Author.find({}, (error, allAuthors) => {
			if(error) {
				return error; 
			} else{
				response.render('pages/authorIndex', {data: allAuthors});
			}
			
		})
	},

	author_detail: (request, response) => {
		const { id } = request.params;
		Author.findOne({_id: id}, (error, foundAuthor) => {
			if(error) {
				return error; 
			} else {
				response.render('pages/authorDetails', {author: foundAuthor});
			}
		})
	},


	author_create_get: (request, response) => {
		response.render('pages/addAuthorForm');
	},
	author_create_post: (request, response) => {
		const {firstName, lastName, birthYear, bio} = request.body; 
		const newAuthor = new Author({
			firstName: firstName,
			lastName: lastName,
			birthYear: birthYear,
			bio: bio,
		});

	newAuthor.save();
	response.redirect("/authors"); 
},


	author_update_get: (request, response) => {
        const { id } = request.params;
        Author.findOne({_id: id}, (error, foundAuthor) => {
            if(error) {
                return error;
            }else {
                response.render('pages/updateAuthorForm', { author: foundAuthor });           
             }
        })
	},

	author_update_put: (request, response) => {
		const {firstName, lastName, birthYear, bio} = request.body; 
		const { id } = request.body;

		Author.findByIdAndUpdate({_id: id}, {$set: {
			firstName: firstName,
			lastName: lastName,
			birthYear: birthYear,
			bio: bio,
		}}, {new: true}, (error) => {
			if (error) {
				return error; 
			}else {
				response.redirect('/authors')
			}
		})
		
	},

	author_delete: (request, response) => {
		const { id } = request.params;
		Author.deleteOne({_id: id}, (error) => {
			if(error) {
				return error; 
			}else{
				response.redirect('/authors')
			}
			
		})
	}
}