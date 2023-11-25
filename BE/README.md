conda create -n eracop-be python=3.10
conda activate eracop-be
uvicorn main:app --host 0.0.0.0 --port 8000