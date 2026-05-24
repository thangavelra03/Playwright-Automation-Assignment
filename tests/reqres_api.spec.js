require('dotenv').config();
const { test, expect, request } = require('@playwright/test');

test('ReqRes API Automation', async () => {

    const apiContext = await request.newContext({
        baseURL: 'https://reqres.in',
        extraHTTPHeaders: {
            'x-api-key': process.env.API_KEY
        }
    });

    // Create User

    const createResponse = await apiContext.post('/api/users', {
        data: {
            name: 'Thangavel',
            job: 'QA Engineer'
        }
    });

    expect(createResponse.status()).toBe(201);

    const createBody = await createResponse.json();

    console.log(createBody);

    const userId = createBody.id;

    expect(createBody.name).toBe('Thangavel');
    expect(createBody.job).toBe('QA Engineer');

    // Update User

    const updateResponse = await apiContext.put(`/api/users/${userId}`, {
        data: {
            name: 'Vel',
            job: 'Senior QA Engineer'
        }
    });

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    console.log(updateBody);

    expect(updateBody.name).toBe('Vel');
    expect(updateBody.job).toBe('Senior QA Engineer');

});