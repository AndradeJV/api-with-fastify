import 'dotenv/config'
import postgress from 'postgress'


const postgres = require('postgres');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;


const URL = `postgress://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`


export const sql = postgres(URL, { ssl: 'require' })