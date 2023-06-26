const { AuthenticationError } = require('apollo-server-express');
const { User, Cryptid, Bookmark } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'bookmarks.cryptids'
              });

              user.bookmarks.sort((a, b) => b.bookmarkDate - a.bookmarkDate);

              return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        cryptid: async (parent, { _id }) => {
            return await Cryptid.findById(_id);
        },
        bookmark: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user_id).populate({
                    path: 'bookmarks.cryptids',
                });
                return user.bookmarks.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        }
    }, 

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password}) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password');
            }
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdateUser(context.user._id, args, { new: true});
            }
            throw new AuthenticationError('Not Logged In');
        },
        addBookmark: async (parent, { cryptids }, context) => {
            if (context.user) {
                const bookmark = new Bookmark({ cryptids });

                await User.findByIdAndUpdate(context.user._id, { $push: { bookmarks: bookmark} });

                return bookmark;
            }

            throw new AuthenticationError('Not logged in');
        },
    },
}

module.exports = resolvers;