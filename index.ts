import { AbortController, AbortSignal } from "./lib/abort";
import { Body, DataBody, JsonBody, StreamBody } from "./lib/body";
import { Context, ContextOptions } from "./lib/context";
import { PushHandler } from "./lib/context-http2";
import { CookieJar } from "./lib/cookie-jar";
import {
	AbortError,
	DecodeFunction,
	Decoder,
	RequestInit,
	FetchInit,
	HttpProtocols,
	Method,
	OnTrailers,
	TimeoutError,
	HttpVersion,
} from "./lib/core";
import { Headers } from "./lib/headers";
import { Request } from "./lib/request";
import { Response } from "./lib/response";


const defaultContext = new Context( );

const setup =
	( opts: Partial< ContextOptions > ) =>
		defaultContext.setup( opts );
const fetch =
	( input: string | Request, init?: Partial< FetchInit > ) =>
		defaultContext.fetch( input, init );
const disconnect =
	( url: string ) =>
		defaultContext.disconnect( url );
const disconnectAll =
	( ) =>
		defaultContext.disconnectAll( );
const onPush =
	( handler?: PushHandler ) =>
		defaultContext.onPush( handler );

function context( opts?: Partial< ContextOptions > )
{
	const ctx = new Context( opts );
	return {
		disconnect: ctx.disconnect.bind( ctx ) as typeof disconnect,
		disconnectAll: ctx.disconnectAll.bind( ctx ) as typeof disconnectAll,
		fetch: ctx.fetch.bind( ctx ) as typeof fetch,
		onPush: ctx.onPush.bind( ctx ) as typeof onPush,
		setup: ctx.setup.bind( ctx ) as typeof setup,
	};
}

export {
	setup,
	context,
	fetch,
	disconnect,
	disconnectAll,
	onPush,

	// Re-export
	AbortController,
	AbortSignal,
	RequestInit,
	FetchInit,
	HttpProtocols,
	Body,
	JsonBody,
	StreamBody,
	DataBody,
	Headers,
	Request,
	Response,
	AbortError,
	TimeoutError,
	HttpVersion,
	OnTrailers,
	ContextOptions,
	DecodeFunction,
	Decoder,
	CookieJar,
	Method,
};
