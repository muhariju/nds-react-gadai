package id.co.nds.gadai.repos.specs;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import id.co.nds.gadai.entities.UserEntity;
import id.co.nds.gadai.models.UserModel;

public class UserSpec implements Specification<UserEntity> {
    private UserModel userModel;

    public UserSpec(UserModel userModel) {
        super();
        this.userModel = userModel;
    }

    @Override
    public Predicate toPredicate(Root<UserEntity> root, CriteriaQuery<?> cq,
            CriteriaBuilder cb) {
        Predicate p = cb.and();
        // Predicate p = cb.disjunction();

        // id user criteria
        if (userModel.getUserId() != null && userModel.getUserId().length() > 0) {
            p.getExpressions().add(cb.like(cb.lower(root.get("userId")),
                    "%" + userModel.getUserId().toLowerCase() + "%"));
        }

        // keterangan criteria
        if (userModel.getUserName() != null && userModel.getUserName().length() > 0) {
            p.getExpressions().add(cb.like(cb.lower(root.get("userName")),
                    "%" + userModel.getUserName().toLowerCase() + "%"));
        }

        // keterangan criteria
        if (userModel.getUserDesc() != null && userModel.getUserDesc().length() > 0) {
            p.getExpressions().add(cb.like(cb.lower(root.get("userDesc")),
                    "%" + userModel.getUserDesc().toLowerCase() + "%"));
        }

        // status criteria
        if (userModel.getRecStatus() != null && userModel.getRecStatus().length() > 0) {
            p.getExpressions().add(cb.equal(root.get("recStatus"), userModel.getRecStatus()));
        }

        // nomor hp criteria
        if (userModel.getUserHp() != null && userModel.getUserHp().length() > 0) {
            p.getExpressions().add(cb.like(root.get("userHp"),
                    "%" + userModel.getUserHp() + "%"));
        }
        cq.orderBy(cb.asc(root.get("userId")));

        return p;
    }
}
