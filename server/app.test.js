const request = require('supertest');
const app = require('./app.js');

describe("GET /getPlayers", () => {

    describe("When you recieve a response", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).get("/getPlayers");
            expect(response.statusCode).toBe(200)
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getPlayers");
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getPlayers");
            expect(response.body.results).toBeDefined()
        })
    })
    
    describe("When you don't recieve a response/incorrect API call", () => {
        test("should respond with a 404 status code", async () => {
            const response = await request(app).get("/getPlayer");
            expect(response.statusCode).toBe(404)
        })
    })

})


describe("GET /getTopPlayers", () => {

    describe("When you recieve a response", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).get("/getTopScores");
            expect(response.statusCode).toBe(200)
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getTopScores");
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getTopScores");
            expect(response.body).toBeDefined()
          })
        test("should respond with a sorted json", async () => {
          const response = await request(app).get("/getTopScores");
          expect(response.body[0].score).toBeGreaterThanOrEqual(response.body[1].score);
        })
    })
    
    describe("When you don't recieve a response/incorrect API call", () => {
        test("should respond with a 404 status code", async () => {
          const response = await request(app).get("/getTopScore");
          expect(response.statusCode).toBe(404)
        })
    })

})


describe("GET /getTopMalePlayers", () => {

    describe("When you recieve a response", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).get("/getMaleTopScores");
            expect(response.statusCode).toBe(200)
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getMaleTopScores");
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getMaleTopScores");
            expect(response.body).toBeDefined()
          })
        test("should respond with a sorted json", async () => {
          const response = await request(app).get("/getMaleTopScores");
          expect(response.body[0].score).toBeGreaterThanOrEqual(response.body[1].score);
        })
    })
    
    describe("When you don't recieve a response/incorrect API call", () => {
        test("should respond with a 404 status code", async () => {
          const response = await request(app).get("/getMaleTopScore");
          expect(response.statusCode).toBe(404)
        })
    })

})


describe("GET /getTopFemalePlayers", () => {

    describe("When you recieve a response", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).get("/getFemaleTopScores");
            expect(response.statusCode).toBe(200)
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getFemaleTopScores");
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
          })
        test("should respond with a content type json", async () => {
            const response = await request(app).get("/getMaleTopScores");
            expect(response.body).toBeDefined()
          })
        test("should respond with a sorted json", async () => {
          const response = await request(app).get("/getFemaleTopScores");
          expect(response.body[0].score).toBeGreaterThanOrEqual(response.body[1].score);
        })
    })
    
    describe("When you don't recieve a response/incorrect API call", () => {
        test("should respond with a 404 status code", async () => {
          const response = await request(app).get("/getFemaleTopScore");
          expect(response.statusCode).toBe(404)
        })
    })

})