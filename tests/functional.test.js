test('on success with expect 200 statuses', async (route) => {
    const response = await request(app).get(route)
    expect(response.status).toBe(200)
})

test('on success on endpoint /health with 204 and empty response content', async () => {
    const response = await request(app).get('/health')
    expect(response.status).toBe(204)
    expect(response.body).toEqual({})
})

test('on error with expect 404 statuses', async (route) => {
    const response = await request(app).get(route)
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toEqual(expect.any(String))
})

test('on error with expect 403 statuses', async () => {
    const response = await request(app).get(route)
    expect(response.status).toBe(403)
})
