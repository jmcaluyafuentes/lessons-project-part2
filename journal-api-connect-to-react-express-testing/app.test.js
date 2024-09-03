import request from 'supertest'
import app from './app.js'

// "test" can be async but "describe" has to be synchronous
describe('App Test', () => {
    test('GET /', async () => {
        const res = await request(app).get('/')
            // request(app) is setting up a supertest
            // .get('/') is simulating a request (not from the network)
        // console.log(res)
        expect(res.status).toBe(200) // "expect" is making an assertion. "res.status" must be 200
        // expect(res.headers["content-type"]).toMatch(/json/) // Pulling out the Content-Type from headers and match it with 'json'. /json/ is a regex
        expect(res.headers["content-type"]).toContain('json') // toContain use to check a substring (thus we eliminate the use of regex in toMatch)
        expect(res.body.info).toBeDefined() // "res.body.info" must be defined
        expect(res.body.info).toBe('Journal API!') // "res.body.info" must contain "Journal API!"
    })

    test('POST /entries', async () => {
        // Get category id using the request method
        const cats = await request(app).get('/categories')

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // --> I have to watch the recorded video from this topic (actual time now is 1:24pm)
        const req = (await request(app).post('/entries')).send({ 
            // post request does not automatically send a request...
            // console.log(cats)

            content: "Hello from Jest",
            // category: "66b437aadf139eb623ff64f5" // Hard-coded category id from Bruno response
            
            category: cats.body[0]._id
        })

        expect(res.status).toBe(201)
        expect(res.headers["content-type"]).toContain('json')

        // Cleanup
        // After running the test above, it will add the entry to the database, that's why we need to cleanup (or delete) that entry from database
        request(app).delete(`/entries/${res.body._id}`)
    })

    // test('GET /categories', async () => {
    //     const res = await request(app).get('/categories')

    //     expect(res.status).toBe(200)
    //     expect(res.headers["content-type"]).toContain('json')
    //     // console.log(res.body)
    //     expect(res.body).toBeInstanceOf(Array)
    //     expect(res.body).toHaveLength(4)
        
    //     const cat = res.body[0]
    //     expect(cat._id).toBeDefined()
    //     expect(cat.name).toBeDefined()

    //     // expect(cat.name).toBe('Food')
    //     // Ensure res.body contains an object with name == "Food"
    //     expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({name: "Food"})]))

    // Refactor the code above: We split up the tests since each test has its own unique purpose
    // Nest the tests in nested "describe"
    describe('GET /categories', () => {
        let res // Declare "res" in parent scope so that it can be accessed by the tests scopes

        // // "beforeEach" function will run before each test begins.
        // beforeEach(async () => {
        //     // Since "res" is repeating in each test, thus we factored this out
        //     // const res = await request(app).get('/categories')
        //         // The "const" declaration of "res" is not accesible to tests scopes, thus we need to declare "res" in parent scope
        //     res = await request(app).get('/categories')
        // })

        // "beforeAll" is more efficient since we know that all tests will not alter the "res"
        // It's pointless to call "beforeEach" each time we run the test
        // Thus we use "beforeAll" so that this will run once before all tests.
        beforeAll(async () => {
            res = await request(app).get('/categories')
        })

        test('Successfully returns JSON content', async () => {
            // const res = await request(app).get('/categories')
            expect(res.status).toBe(200)
            expect(res.headers["content-type"]).toContain('json')
        })

        // Each test is atomic
        // 'res' needs to be declared again in new test
        test('Returns an array with 4 elements', async () => {
            // const res = await request(app).get('/categories')
            expect(res.body).toBeInstanceOf(Array)
            expect(res.body).toHaveLength(4)
        })

        test('First category has an _id and name', async () => {
            // const res = await request(app).get('/categories')
            const cat = res.body[0]
            expect(cat._id).toBeDefined()
            expect(cat.name).toBeDefined()
        })

        test('Ensure list of categories contains an object with name == "Food"', async () => {
            // const res = await request(app).get('/categories')
            expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({name: "Food"})]))
        })
    })



})