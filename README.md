
# Store

API for stock management using Java, Spring and PostgreSQL

Mappings:




## GET

#### Get all items

```http
GET /product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| none| `none` | Returns all items stored in the Product table |

#### Get all items with specific name 

```http
GET /product/productName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productName`      | `string` | **Required**. Name of item to search for |

#### Get item with specific id

```http
GET /product/findById/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `UUID` | **Required**. Id of the item to be returned |

## POST
#### Insert product into database 
```http
POST /product
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `none` | none  |

#### Request body:
JSON containing fields of the item being saved to the database: 

String productName,  String description, String category, float price, int stockQuantity, LocalDateTime addedDate

Example:

```yaml 
{
    "productName": "anime shirt",
    "description": "a black shirt with akame from akame ga kill",
    "category": "clothes",
    "price": 12.3,
    "stockQuantity": 1,
    "addedDate": "2023-01-11 01:01:01.000001"
}
``` 

## PUT

### Update existing product using id

```http
PUT /product/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `UUID` | **Required**. Id of the item to be updated |



## DELETE
### Remove a product from the database


```http
DELETE /product/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `UUID` | **Required**. Id of the item to be deleted |

