# import uvicorn


# if __name__ == "__main__":
#     uvicorn.run("example:app", port = 3000, host = "0.0.0.0", reload=True )


import uvicorn

if __name__ == '__main__':
    uvicorn.run('main:app', host = '0.0.0.0', port = 3000, reload=True)
