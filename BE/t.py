import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Mở file CSV để đọc
    with open(csv_file_path, 'r') as csv_file:
        # Đọc dữ liệu từ file CSV
        csv_data = csv.DictReader(csv_file)
        
        # Chuyển đổi dữ liệu thành danh sách các dictionary
        data_list = []
        for row in csv_data:
            data_list.append(row)

    # Ghi dữ liệu vào file JSON
    with open(json_file_path, 'w') as json_file:
        json.dump(data_list, json_file, indent=4)

# Thay đổi đường dẫn file CSV và file JSON của bạn
csv_file_path = 'dataset-fashion.csv'
json_file_path = 'data.json'

# Gọi hàm chuyển đổi
csv_to_json(csv_file_path, json_file_path)
