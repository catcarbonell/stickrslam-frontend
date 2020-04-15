import dotenv from 'dotenv';
import axios from 'axios';
import useAxios, { configure, loadCache, serializeCache } from 'axios-hooks'
dotenv.config()

const endpoint = process.env.REACT_APP_POSTS;

