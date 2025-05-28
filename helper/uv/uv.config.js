self.__uv$config = {
    prefix: '/helper/math/',
    bare: 'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/helper/uv/uv.handler.js',
    bundle: '/helper/uv/uv.bundle.js',
    config: '/helper/uv/uv.config.js',
    sw: '/helper/uv/uv.sw.js',
};
