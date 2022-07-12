class AdminUtils:
    def format_admin(admin):
        return {
            "hoten": admin['hoten'],
            'macongtac': str(admin['macongtac']),
            "noicongtac": admin['noicongtac'],
            "khoa": admin['khoa'],
            'gioitinh': admin['gioitinh'],
            "sodienthoai": admin['sodienthoai'],
            'email': admin['email'],
        }

