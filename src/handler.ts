import { APIGatewayProxyHandler } from 'aws-lambda';
import { createSpecialsHandler, deleteSpecialsHandler, getSpecialsHandler, listSpecialsHandler, updateSpecialsHandler } from './modules/api/specials';
import { createRegularsHandler, deleteRegularsHandler, getRegularsHandler, listRegularsHandler, updateRegularsHandler } from './modules/api/regulars';

export const listSpecials: APIGatewayProxyHandler = listSpecialsHandler;
export const getSpecials: APIGatewayProxyHandler = getSpecialsHandler;
export const createSpecials: APIGatewayProxyHandler = createSpecialsHandler;
export const updateSpecials: APIGatewayProxyHandler = updateSpecialsHandler;
export const deleteSpecials: APIGatewayProxyHandler = deleteSpecialsHandler;

export const listRegulars: APIGatewayProxyHandler = listRegularsHandler;
export const getRegulars: APIGatewayProxyHandler = getRegularsHandler;
export const createRegulars: APIGatewayProxyHandler = createRegularsHandler;
export const updateRegulars: APIGatewayProxyHandler = updateRegularsHandler;
export const deleteRegulars: APIGatewayProxyHandler = deleteRegularsHandler;
