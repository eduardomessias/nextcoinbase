import SanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: 'a6wxfthi',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skWNdj57OTWQLC4J6qzf01e4hT3B8h2Z5CDJxRj1kLuhLiyrr7VqF3J51NGZK7XeKWFFCLR08zfLMOjw5XdCtpNSExcKFpjlcXocru1Rg0PeFqmzqrvgv5Yvjp7v8FWfLpcELmn394fDhKafZDrduXD3BWbQKHnR2xwuioGtbr5DXo313zUf',
    useCdn: false
})