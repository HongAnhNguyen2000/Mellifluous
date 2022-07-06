import uvicorn


if __name__ == "__main__":
    uvicorn.run("example:app", port = 3000, host = "0.0.0.0", reload=True )

