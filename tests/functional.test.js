test('[on][Success][Expect200Statuses]', async (route) => {
    const response = await request(app).get(route)
    expect(response.status).toBe(200)
})

test('[on][Success][OnEndpointHealthWith204AndEmptyResponseContent]', async () => {
    const response = await request(app).get('/health')
    expect(response.status).toBe(204)
    expect(response.body).toEqual({})
})

test('[on][Error][Expect404Statuses]', async (route) => {
    const response = await request(app).get(route)
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toEqual(expect.any(String))
})

test('[on][Error][Expect403Statuses]', async () => {
    const response = await request(app).get(route)
    expect(response.status).toBe(403)
})
