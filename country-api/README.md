# REST Countries API

project on using REST to get country data. Started on Feb 7th, 2024. First Nuxt application

# My Process

# Questions I have

- Is there anything in my nuxt config that was done improperly?
- In regionSelect.vue, how do I better use enums globally?
- In Vue 3, when I create a new component all I do is use the command `vbase-3s` to create one with script setup, and usually my style tag uses `scss`, but using the Nuxtr extension in Nuxt 3, I have to manually add `lang='scss'`. Is there another way to automate this?

# Issues Encountered

- I was trying to use data after fetching and one issue I had once I tried to use the data in a `v-for` was that "Property 'name' does not exist on type 'never'. I fixed this typescript issue by creating an interface with the data's structure and adding that type to the `useState`. I still had the issue that it could not find the variable x in Country. My issue though was not making the type an array as in `const countries = useState<Country[]>(...)`. After I added this in my error disappeared and I received type inferance

- For languages and native name, it returns an object with unique keys and I don't know how to handle that.

# What I Learned

# Useful Links

[nuxt google fonts](https://google-fonts.nuxtjs.org/getting-started/setup) - nuxt google font documentation on setting up project
