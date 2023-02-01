# ER図

https://mermaid.live/edit

## 統計データ保存 

```mermaid
erDiagram
    STATISTICS {
        integer id
        integer engineer_id
        integer generation
        integer sum
        timestamps created_at
        timestamps updated_at
    }
    ENGINEERS ||--o{ STATISTICS : places
    ENGINEERS {
        integer id
        string name
        timestamps created_at
        timestamps updated_at
    }
    CLIENT_RESULTS {
        integer id
        string ip_address
        integer point_intention
        integer point_view
        integer point_expert
        integer point_tech
        integer generation
        integer sex
        integer month
        timestamps created_at
        timestamps updated_at
    }
```
